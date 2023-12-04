import React from "react";

const Collapse = (props) => {
  return (
    <div>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#{props.href}"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        
      <div className="collapse" id="collapseExample">
       {Collapse.children}
      </div>
    </div>
  );
};

export default Collapse;
