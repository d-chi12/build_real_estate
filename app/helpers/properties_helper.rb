module PropertiesHelper

  def property_thumbnail property
    img = property.photo.present? ? property.photo.thumb.url : "noimage.png"
    image_tag img, class: "property-thumb"
  end
end
