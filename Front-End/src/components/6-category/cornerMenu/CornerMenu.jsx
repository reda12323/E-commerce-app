import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./cornerMenu.css";

const CornerMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    // Automatically open the menu if the currentPath matches the main category or any subcategory
    const newOpenMenus = {};
    menuItems.forEach((item) => {
      if (
        currentPath === item.path ||
        item.subcategories?.some((sub) => currentPath === sub.path)
      ) {
        newOpenMenus[item.path] = true;
      }
    });
    setOpenMenus(newOpenMenus);
  }, [currentPath]);

  const toggleMenu = (path) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const menuItems = [
    { title: "Setup Complet", path: "/category/SetupComplet" },
    {
      title: "Config Pc Gamer",
      path: "/category/pcGamer",
      subcategories: [{ title: "Pc Bureau Gamer", path: "/category/pcGamer/PcBureauGamer" }]
    },
    {
      title: "Workstation",
      path: "/category/workstation",
      subcategories: [
        { title: "Workstation AMD", path: "/category/workstation/WorkstationAmd" },
        { title: "Workstation INTEL", path: "/category/workstation/WorkstationIntel" }
      ]
    },
    {
      title: "Pc Portable",
      path: "/category/pcPortable",
      subcategories: [
        { title: "Pc Portable Gamer", path: "/category/pcPortable/PcPortableGamer" },
        { title: "Pc Portable Professionel", path: "/category/pcPortable/PcPortableProfessionel" }
      ]
    },
    {
      title: "Composant",
      path: "/category/composant",
      subcategories: [
        { title: "Carte Mère", path: "/category/composant/CarteMere" },
        { title: "Carte Graphique", path: "/category/composant/CarteGraphique" }
      ]
    },
    {
      title: "Stockage",
      path: "/category/stockage",
      subcategories: [
        { title: "HDD", path: "/category/stockage/Hdd" },
        { title: "SSD", path: "/category/stockage/Ssd" }
      ]
    },
    {
      title: "Gaming",
      path: "/category/gaming",
      subcategories: [
        { title: "Clavier", path: "/category/gaming/Clavier" },
        { title: "Souris", path: "/category/gaming/Souris" },
        { title: "Casque", path: "/category/gaming/Casque" }
      ]
    },
    {
      title: "Meuble",
      path: "/category/meuble",
      subcategories: [
        { title: "Chaise Gamer", path: "/category/meuble/ChaiseGamer" },
        { title: "Bureau Gamer", path: "/category/meuble/BureauGamer" },
        { title: "Chaise & Bureau", path: "/category/meuble/Chaise&Bureau" }
      ]
    },
    {
      title: "Moniteur",
      path: "/category/moniteur",
      subcategories: [
        { title: "MSI", path: "/category/moniteur/Msi" },
        { title: "SAMSUNG", path: "/category/moniteur/Samsung" },
        { title: "ASUS", path: "/category/moniteur/Asus" }
      ]
    },
    {
      title: "Accessoire",
      path: "/category/accessoire",
      subcategories: [
        { title: "Microphone", path: "/category/accessoire/Microphone" },
        { title: "Haut-Parleur", path: "/category/accessoire/HautParleur" },
        { title: "Webcam", path: "/category/accessoire/Webcam" }
      ]
    }
  ];

  return (
    <div className="corner-menu">
      <div className="menu-container">
        <h3 className="menu-title">Categories</h3>
        <ul className="menu-list">
          {menuItems.map((item) => {
            const isActive =
              currentPath === item.path ||
              item.subcategories?.some((sub) => currentPath === sub.path);

            return (
              <li key={item.path} className={`menu-item ${isActive ? "active" : ""}`}>
                <div className="menu-header">
                  <Link to={item.path} className={`menu-link ${isActive ? "active-link" : ""}`}>
                    {item.title}
                  </Link>
                  {item.subcategories && (
                    <button className="toggle-btn" onClick={() => toggleMenu(item.path)}>
                      {openMenus[item.path] ? "−" : "+"}
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {item.subcategories && openMenus[item.path] && (
                    <motion.div
                      className="submenu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.subcategories.map((sub) => {
                        const isSubActive = currentPath === sub.path;
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`submenu-item ${isSubActive ? "active-sub" : ""}`}
                          >
                            ▸ {sub.title}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CornerMenu;
