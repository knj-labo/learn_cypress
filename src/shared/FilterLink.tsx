import React from "react";
import { Link } from "react-router-dom";

type Routes = "/" | "/active" | "/completed";

type Props = {
  path: Routes;
};

export const FilterLink: React.FC<Props> = ({ path }) => {
  return (
    <ul className="filters">
      <li>
        <Link
          data-cy="all-filter"
          className={path === "/" ? "selected" : ""}
          to="/"
        >
          All
        </Link>
      </li>
      <li>
        <Link
          data-cy="active-filter"
          className={path === "/active" ? "selected" : ""}
          to="/active"
        >
          Active
        </Link>
      </li>
      <li>
        <Link
          data-cy="completed-filter"
          className={path === "/completed" ? "selected" : ""}
          to="/completed"
        >
          Completed
        </Link>
      </li>
    </ul>
  );
};
