import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";

const Library: React.FC = () => {
  return (
    <div id="page-library-2">
    <div id="i9ma3" style={{"display": "flex", "height": "100vh", "fontFamily": "Arial, sans-serif", "--chart-color-palette": "default"}}>
      <nav id="ivveo" style={{"width": "250px", "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)", "color": "white", "padding": "20px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "--chart-color-palette": "default"}}>
        <h2 id="iouuw" style={{"marginTop": "0", "fontSize": "24px", "marginBottom": "30px", "fontWeight": "bold", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="i9vnk" style={{"display": "flex", "flexDirection": "column", "flex": "1", "--chart-color-palette": "default"}}>
          <a id="ii3f8" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/author">{"Author"}</a>
          <a id="iew71" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/book">{"Book"}</a>
          <a id="iazfm" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "rgba(255,255,255,0.2)", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/library">{"Library"}</a>
        </div>
        <p id="iqpic" style={{"marginTop": "auto", "paddingTop": "20px", "borderTop": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "opacity": "0.8", "textAlign": "center", "--chart-color-palette": "default"}}>{"© 2026 BESSER. All rights reserved."}</p>
      </nav>
      <main id="ia5ju" style={{"flex": "1", "padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default"}}>
        <h1 id="iu77f" style={{"marginTop": "0", "color": "#333", "fontSize": "32px", "marginBottom": "10px", "--chart-color-palette": "default"}}>{"Library"}</h1>
        <p id="img5a" style={{"color": "#666", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"Manage Library data"}</p>
        <TableBlock id="table-library-2" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="Library List" options={{"showHeader": true, "stripedRows": false, "showPagination": true, "rowsPerPage": 5, "actionButtons": true, "columns": [{"label": "Name", "column_type": "field", "field": "name", "type": "str", "required": true}, {"label": "Address", "column_type": "field", "field": "address", "type": "str", "required": true}, {"label": "Has", "column_type": "lookup", "path": "has", "entity": "Book", "field": "title", "type": "list", "required": false}], "formColumns": [{"column_type": "field", "field": "name", "label": "name", "type": "str", "required": true, "defaultValue": null}, {"column_type": "field", "field": "address", "label": "address", "type": "str", "required": true, "defaultValue": null}, {"column_type": "lookup", "path": "has", "field": "has", "lookup_field": "title", "entity": "Book", "type": "list", "required": false}]}} dataBinding={{"entity": "Library", "endpoint": "/library/"}} />
      </main>
    </div>    </div>
  );
};

export default Library;
