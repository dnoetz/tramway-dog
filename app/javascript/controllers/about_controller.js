import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import About from "./components/About"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const root = document.getElementById("about")
    createRoot(root).render(<About />)
  }
}

