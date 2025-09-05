import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function WasteHistory() {
  const [wasteData, setWasteData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchWasteHistory(user.uid);
      } else {
        setWasteData([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchWasteHistory = async (uid) => {
    try {
      setLoading(true);
      const wasteHistoryRef = collection(db, "users", uid, "wasteHistory");
      const q = query(wasteHistoryRef, orderBy("collectionDate", "desc"));
      const querySnapshot = await getDocs(q);
      
      const historyData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        historyData.push({
          id: doc.id,
          ...data,
          collectionDate: data.collectionDate?.toDate ? 
            data.collectionDate.toDate() : 
            new Date(data.collectionDate)
        });
      });
      
      setWasteData(historyData);
    } catch (error) {
      console.error("Error fetching waste history:", error);
    } finally {
      setLoading(false);
    }
  };

  const displayedData = showAll ? wasteData : wasteData.slice(0, 3);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatLocation = (location) => {
    if (location && location.latitude && location.longitude) {
      return `${location.latitude.toFixed(3)}°N, ${location.longitude.toFixed(3)}°E`;
    }
    return "Location not available";
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'recycled':
        return 'bg-green-100 text-green-800';
      case 'composted':
        return 'bg-blue-100 text-blue-800';
      case 'disposed':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getWasteTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'electronic':
        return '🔌';
      case 'plastic':
        return '♻️';
      case 'organic':
        return '🌿';
      case 'paper':
        return '📄';
      default:
        return '🗑️';
    }
  };

  if (loading) {
    return (
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-green-900 mb-4">Waste Collection History</h3>
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-900"></div>
          <span className="ml-2 text-green-800">Loading history...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-green-900">Waste Collection History</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
            Total Records: {wasteData.length}
          </span>
        </div>
      </div>

      {wasteData.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-2">📝</div>
          <p className="text-green-800 text-lg">No waste collection history found</p>
          <p className="text-green-600 text-sm mt-1">Start collecting waste to see your impact!</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {displayedData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:shadow-lg border border-white/20"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{getWasteTypeIcon(item.wasteType)}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-green-900">
                      {item.wasteType || 'Unknown Type'}
                    </h4>
                    <p className="text-sm text-green-700">
                      {formatDate(item.collectionDate)}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-green-100/50 rounded-lg p-2">
                    <p className="text-xs text-green-600 font-medium">Weight</p>
                    <p className="text-sm font-bold text-green-900">
                      {item.weightKg || 0} kg
                    </p>
                  </div>
                  
                  <div className="bg-blue-100/50 rounded-lg p-2">
                    <p className="text-xs text-blue-600 font-medium">Points</p>
                    <p className="text-sm font-bold text-blue-900">
                      +{item.pointsEarned || 0}
                    </p>
                  </div>
                  
                  <div className="bg-purple-100/50 rounded-lg p-2">
                    <p className="text-xs text-purple-600 font-medium">Location</p>
                    <p className="text-xs text-purple-900 truncate">
                      {formatLocation(item.location)}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status || 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {wasteData.length > 3 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                {showAll ? 'Show Less' : `Show More (${wasteData.length - 3} more)`}
              </button>
            </div>
          )}

          {showAll && wasteData.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-green-600 text-sm italic">
                📋 No more records to track - You're all caught up!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WasteHistory;