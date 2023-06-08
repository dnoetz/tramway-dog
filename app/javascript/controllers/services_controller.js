import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import Services from "./components/Services"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const root = document.getElementById("services")
    createRoot(root).render(<Services />)
  }
}

