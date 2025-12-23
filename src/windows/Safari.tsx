import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import { MoveRight } from "lucide-react";
import { blogPosts } from "@/constants";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter a website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>My Developper Articles</h2>

        {blogPosts.map(({ id, date, title, image, link }) => (
          <div key={`${id}-${title}`} className="blog-post py-3">
            <div className="col-span-2">
              <img src={image} alt={title} />
            </div>

            <div className="content">
              <p>{date}</p>
              <h3>{title}</h3>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Check out the full post <MoveRight className="icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper({ Component: Safari, windowKey: "safari" });

export default SafariWindow;
