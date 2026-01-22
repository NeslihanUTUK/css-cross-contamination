import "./App.css";
import { Checkbox as RhcCheckbox } from "@rijkshuisstijl-community/components-react";
import "@rijkshuisstijl-community/design-tokens/dist/index.css";

import { Checkbox as UtrechtCheckbox } from "@utrecht/component-library-react";
import "@utrecht/component-library-css/dist/index.css";

function App() {
  return (
    <div className="rhc-theme">
      <div>
        <label>
          <UtrechtCheckbox
            disabled
          />
            Remember me
        </label>
      </div>
      
    </div>
  );
}

export default App;