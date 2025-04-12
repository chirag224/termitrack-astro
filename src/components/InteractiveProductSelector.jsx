// src/components/InteractiveProductSelector.jsx
// Handles the state for selecting features and highlighting products.
// Renders GetInTouch and PestServicesGrid, passing necessary props/handlers.

import React, { useState, useEffect } from "react";
import GetInTouch from "./GetInTouch.jsx"; // Adjust path if needed
import PestServicesGrid from "./PestServicesGrid.jsx"; // Adjust path if needed

// Keep or import these constants
const FEATURES = {
  termite: "Termite Tracker",
  moister: "Moister Sensor", // Corrected typo if necessary
  temperature: "Temperature Sensor",
  thermal: "Thermal Image",
};

const PRODUCT_FEATURES = {
  "iTracker-Pro": new Set([
    FEATURES.termite,
    FEATURES.moister,
    FEATURES.temperature,
    FEATURES.thermal,
  ]),
  "iTracker-Base": new Set([
    FEATURES.termite,
    FEATURES.moister,
    FEATURES.temperature,
  ]),
  "Tracker Only": new Set([FEATURES.termite]),
};

function setsAreEqual(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (const items of setA) {
    if (!setB.has(items)) return false;
  }
  return true;
}

function InteractiveProductSelector() {
  const [selectedFeature, setSelectedFeature] = useState(new Set());
  const [highlightedProduct, setHighlightedProduct] = useState(null);

  const handleToggleFeature = (feature) => {
    setSelectedFeature((prevSet) => {
      const newSet = new Set(prevSet);
      if (newSet.has(feature)) {
        newSet.delete(feature);
      } else {
        newSet.add(feature);
      }
      return newSet;
    });
  };

  useEffect(() => {
    let productToHighlight = null; // Corrected typo
    if (setsAreEqual(PRODUCT_FEATURES["iTracker-Pro"], selectedFeature)) {
      productToHighlight = "iTracker-Pro";
    } else if (
      setsAreEqual(PRODUCT_FEATURES["iTracker-Base"], selectedFeature)
    ) {
      productToHighlight = "iTracker-Base";
    } else if (
      setsAreEqual(PRODUCT_FEATURES["Tracker Only"], selectedFeature)
    ) {
      productToHighlight = "Tracker Only";
    } else {
      productToHighlight = null;
    }
    setHighlightedProduct(productToHighlight);
  }, [selectedFeature]);

  return (
    <>
      {" "}
      {/* Use Fragment or a div wrapper if needed */}
      <GetInTouch
        selectedFeature={selectedFeature}
        onFeatureToggle={handleToggleFeature}
        Features={FEATURES}
      />
      <PestServicesGrid highlightedProduct={highlightedProduct} />
    </>
  );
}

export default InteractiveProductSelector;
