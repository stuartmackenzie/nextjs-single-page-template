import ChevronDownIcon from "./ChevronDownIcon";
import CodeIcon from "./CodeIcon";
import DevIcon from "./DevIcon";
import EmailIcon from "./EmailIcon";
import FileCodeIcon from "./FileCodeIcon";
import GithubIcon from "./GithubIcon";
import MobileIcon from "./MobileIcon";
import TwitterIcon from "./TwitterIcon";
import YoutubeIcon from "./YoutubeIcon";

export default function iconFactory(name) {
  switch (name) {
    case "chevron-down":
      return <ChevronDownIcon />;
    case "code":
      return <CodeIcon />;
    case "dev":
      return <DevIcon />;
    case "email":
      return <EmailIcon />;
    case "file-code":
      return <FileCodeIcon />;
    case "github":
      return <GithubIcon />;
    case "mobile":
      return <MobileIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "youtube":
      return <YoutubeIcon />;
    default:
      return undefined;
  }
}
