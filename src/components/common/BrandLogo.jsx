import { Link } from "react-router-dom";
import AplosLogo from "./AplosLogo";

export default function BrandLogo({ light = false, showTagline = true }) {
  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Aplos home"
    >
      <AplosLogo light={light} showTagline={showTagline} />
    </Link>
  );
}
