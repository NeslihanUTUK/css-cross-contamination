import './App.css'
import { ColumnLayout, Checkbox as RhcCheckbox} from '@rijkshuisstijl-community/components-react';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Checkbox as UtrechtCheckbox } from "@utrecht/component-library-react";
import { useState } from "react";

function App() {
   const [isChecked, setIsChecked] = useState(true);
  return (
    <>
    <ColumnLayout>
    <div className="checkbox-rhc">
      <RhcCheckbox aria-label="checkbox-label" />
    </div>

    <div className="utrecht-theme">
      <label>
        <UtrechtCheckbox 
          checked={isChecked} 
          onChange={(e) => setIsChecked(e.target.checked)} 
        />
        Remember me
      </label>
    </div>
    </ColumnLayout>
    </>
  )
}

export default App;
