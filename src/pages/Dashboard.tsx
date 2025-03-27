
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InvestmentDashboard from "@/components/dashboard/InvestmentDashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <InvestmentDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
