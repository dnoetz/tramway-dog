import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import Home from "./components/Home"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const root = document.getElementById("home")
    createRoot(root).render(<Home />)
  }
}
