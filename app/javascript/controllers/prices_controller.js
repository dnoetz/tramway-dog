import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import Prices from "./components/Prices"

// Connects to data-controller="prices"
export default class extends Controller {
  connect() {
    const root = document.getElementById("prices")
    createRoot(root).render(<Prices />)
  }
}
