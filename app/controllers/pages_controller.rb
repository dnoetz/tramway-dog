class PagesController < ApplicationController
  def home
    @page_title = "Welcome to Tramway Dog Grooming"
    @meta_description = "This is the homepage of Your Website. Find out more about our services and contact us for more information."
    @meta_keywords = "dog grooming, dog grooming near me, best dog grooming near me, walk in dog grooming, local dog grooming"
  end

  def about
    @page_title = "About Us"
    @meta_description = "This is the about page. Meet our groomers and read our mission statement."
  end

  def services
    @page_title = "Our Services"
    @meta_description = "This is the services page. Find out more about the services we offer. Full descriptions of each service."
    @meta_keywords = "dog grooming services, grooming services, dog grooming services near me, dog grooming services list, local dog grooming services, best dog grooming services"
  end

  def contact
    @page_title = "Contact Us"
    @meta_description = "This is the contact page. Find out how to contact us and where we are located."
  end

  def prices
    @page_title = "Our Prices"
    @meta_description = "This is the prices page. Find out how much our services cost."
    @meta_keywords = "dog grooming prices, dog grooming cost, low cost dog grooming, how much is it to get my dog groomed"
  end

  def testimonials
    @page_title = "Testimonials"
    @meta_description = "This is the testimonials page. Read what our customers have to say about us."
    @meta_keywords = "dog grooming testimonials, dog grooming reviews, dog grooming reviews near me, dog grooming reviews"
  end
end
