import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import Testimonials from "./components/Testimonials"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const root = document.getElementById("testimonials")
    createRoot(root).render(<Testimonials />)
  }
}

