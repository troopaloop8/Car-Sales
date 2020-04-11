import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  return (
    <div>
      <section class="hero is-bold is-primary rounded-corner ">
        <div class="hero-body">
          <div class="container ">
            <Header />
            <Total />
          </div>
        </div>
      </section><br/>
      <div class="columns">
        <div class="column column-fix-height notification is-bold is-info"><AddedFeatures /></div>
        <div class="column column-fix-height notification is-bold is-warning"><AdditionalFeatures /></div>
      </div>
      

      
    </div>
  );
};

export default App;
