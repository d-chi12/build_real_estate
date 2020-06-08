module PropertiesHelper

  def property_thumbnail property
    img = property.photo.present? ? property.photo.thumb.url : "house-home-2.jpg"
    image_tag img, class: "property-thumb"
  end
end
