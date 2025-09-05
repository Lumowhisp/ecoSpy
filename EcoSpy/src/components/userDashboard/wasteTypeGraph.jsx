import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

function WasteTypeChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalWaste, setTotalWaste] = useState(0);

  const COLORS = {
    electronic: '#10B981', // green
    plastic: '#3B82F6',    // blue
    organic: '#F59E0B',    // amber
    paper: '#8B5CF6',      // purple
    metal: '#EF4444',      // red
    glass: '#06B6D4',      // cyan
    default: '#6B7280'     // gray
  };

  const getWasteTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'electronic': return '🔌';
      case 'plastic': return '♻️';
      case 'organic': return '🌿';
      case 'paper': return '📄';
      case 'metal': return '🔩';
      case 'glass': return '🥤';
      default: return '🗑️';
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchWasteTypeData(user.uid);
      } else {
        setChartData([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchWasteTypeData = async (uid) => {
    try {
      setLoading(true);
      const wasteHistoryRef = collection(db, "users", uid, "wasteHistory");
      const querySnapshot = await getDocs(wasteHistoryRef);
      
      const wasteTypes = {};
      let total = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const wasteType = data.wasteType?.toLowerCase() || 'other';
        const weight = data.weightKg || 0;
        
        if (wasteTypes[wasteType]) {
          wasteTypes[wasteType] += weight;
        } else {
          wasteTypes[wasteType] = weight;
        }
        total += weight;
      });

      // Convert to chart data format
      const chartArray = Object.entries(wasteTypes).map(([type, weight]) => ({
        name: type.charAt(0).toUpperCase() + type.slice(1),
        value: weight,
        percentage: ((weight / total) * 100).toFixed(1),
        color: COLORS[type] || COLORS.default,
        icon: getWasteTypeIcon(type)
      }));

      // Sort by value (highest first)
      chartArray.sort((a, b) => b.value - a.value);
      
      setChartData(chartArray);
      setTotalWaste(total);
    } catch (error) {
      console.error("Error fetching waste type data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-lg">{data.icon}</span>
            <p className="font-semibold text-green-900">{data.name}</p>
          </div>
          <p className="text-sm text-green-700">Weight: {data.value} kg</p>
          <p className="text-sm text-green-600">Percentage: {data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  // Custom legend
  const CustomLegend = ({ payload }) => {
    return (
      <div className="grid grid-cols-2 gap-2 mt-4">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-xs">{entry.payload.icon}</span>
            <span className="text-green-800 font-medium">{entry.value}</span>
            <span className="text-green-600">({entry.payload.percentage}%)</span>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-green-900 mb-4">Waste Type Distribution</h3>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-900"></div>
          <span className="ml-2 text-green-800">Loading chart...</span>
        </div>
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-green-900 mb-4">Waste Type Distribution</h3>
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-50">📊</div>
          <p className="text-green-800 text-lg font-medium mb-2">No data to display</p>
          <p className="text-green-600 text-sm">Start collecting waste to see your distribution chart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-green-900">Waste Type Distribution</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
            Total: {totalWaste.toFixed(1)} kg
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Pie Chart */}
        <div className="w-full lg:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend and Stats */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h4 className="text-lg font-semibold text-green-900 mb-4">Breakdown</h4>
          <div className="space-y-3">
            {chartData.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-white/30 rounded-lg p-3 hover:bg-white/40 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-green-900">{item.name}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-900">{item.value} kg</p>
                  <p className="text-sm text-green-600">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-6 bg-green-100/50 rounded-lg p-4">
            <h5 className="font-semibold text-green-900 mb-2">Summary</h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-700">Most Collected</p>
                <p className="font-bold text-green-900">
                  {chartData[0]?.icon} {chartData[0]?.name}
                </p>
              </div>
              <div>
                <p className="text-green-700">Types Collected</p>
                <p className="font-bold text-green-900">{chartData.length} Types</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteTypeChart;