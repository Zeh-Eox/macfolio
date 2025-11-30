import WindowControls from "@/components/WindowControls";
import { locations } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import useLocationStore from "@/store/location";
import useWindowStore from "@/store/window";
import type { Item, FileItem, FolderItem } from "@/types";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const isFileItem = (item: Item): item is FileItem => {
    return "fileType" in item;
  };

  const isFolderItem = (item: Item): item is FolderItem => {
    return item.kind === "folder";
  };

  const openItem = (item: Item) => {
    if (isFileItem(item)) {
      if (item.fileType === "pdf") {
        return openWindow("resume");
      }

      if (["fig", "url"].includes(item.fileType) && item.href) {
        return window.open(item.href, "_blank");
      }

      const windowKey = `${item.fileType}${item.kind}` as keyof ReturnType<
        typeof useWindowStore.getState
      >["windows"];
      if (windowKey in useWindowStore.getState().windows) {
        openWindow(windowKey, item);
      }
    }

    if (isFolderItem(item)) {
      setActiveLocation(item as any);
    }
  };

  const renderList = (name: string, items: Item[]) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              if (isFolderItem(item)) {
                setActiveLocation(item as any);
              }
            }}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favourites", Object.values(locations))}
          {locations.work?.children &&
            renderList("My Projects", locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper({
  Component: Finder,
  windowKey: "finder",
});

export default FinderWindow;
