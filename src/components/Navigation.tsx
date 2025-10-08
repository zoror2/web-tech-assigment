import { NavLink } from "react-router-dom";
import { FileText, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">JD</span>
            </div>
            <span className="font-semibold text-lg">John Doe</span>
          </div>
          
          <div className="flex space-x-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg section-transition ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`
              }
            >
              <FileText className="w-4 h-4" />
              <span className="font-medium">Resume</span>
            </NavLink>
            
            <NavLink
              to="/biodata"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg section-transition ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`
              }
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Bio-data</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
