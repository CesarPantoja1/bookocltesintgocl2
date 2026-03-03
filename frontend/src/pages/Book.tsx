import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";

const Book: React.FC = () => {
  return (
    <div id="page-book-1">
    <div id="it06j" style={{"display": "flex", "height": "100vh", "fontFamily": "Arial, sans-serif", "--chart-color-palette": "default"}}>
      <nav id="i0blf" style={{"width": "250px", "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)", "color": "white", "padding": "20px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "--chart-color-palette": "default"}}>
        <h2 id="iop02" style={{"marginTop": "0", "fontSize": "24px", "marginBottom": "30px", "fontWeight": "bold", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="i72q7" style={{"display": "flex", "flexDirection": "column", "flex": "1", "--chart-color-palette": "default"}}>
          <a id="iuawp" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/author">{"Author"}</a>
          <a id="i2uul" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "rgba(255,255,255,0.2)", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/book">{"Book"}</a>
          <a id="ip3p9" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/library">{"Library"}</a>
        </div>
        <p id="iphkx" style={{"marginTop": "auto", "paddingTop": "20px", "borderTop": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "opacity": "0.8", "textAlign": "center", "--chart-color-palette": "default"}}>{"© 2026 BESSER. All rights reserved."}</p>
      </nav>
      <main id="irhkn" style={{"flex": "1", "padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default"}}>
        <h1 id="ihjm8" style={{"marginTop": "0", "color": "#333", "fontSize": "32px", "marginBottom": "10px", "--chart-color-palette": "default"}}>{"Book"}</h1>
        <p id="i30zw" style={{"color": "#666", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"Manage Book data"}</p>
        <TableBlock id="table-book-1" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="Book List" options={{"showHeader": true, "stripedRows": false, "showPagination": true, "rowsPerPage": 5, "actionButtons": true, "columns": [{"label": "Title", "column_type": "field", "field": "title", "type": "str", "required": true}, {"label": "Pages", "column_type": "field", "field": "pages", "type": "int", "required": true}, {"label": "Release", "column_type": "field", "field": "release", "type": "date", "required": true}, {"label": "WrittenBy", "column_type": "lookup", "path": "writtenBy", "entity": "Author", "field": "name", "type": "list", "required": true}, {"label": "LocatedIn", "column_type": "lookup", "path": "locatedIn", "entity": "Library", "field": "name", "type": "str", "required": true}], "formColumns": [{"column_type": "field", "field": "title", "label": "title", "type": "str", "required": true, "defaultValue": null}, {"column_type": "field", "field": "pages", "label": "pages", "type": "int", "required": true, "defaultValue": null}, {"column_type": "field", "field": "release", "label": "release", "type": "date", "required": true, "defaultValue": null}, {"column_type": "lookup", "path": "writtenBy", "field": "writtenBy", "lookup_field": "name", "entity": "Author", "type": "list", "required": true}, {"column_type": "lookup", "path": "locatedIn", "field": "locatedIn", "lookup_field": "name", "entity": "Library", "type": "str", "required": true}]}} dataBinding={{"entity": "Book", "endpoint": "/book/"}} />
      </main>
    </div>    </div>
  );
};

export default Book;
