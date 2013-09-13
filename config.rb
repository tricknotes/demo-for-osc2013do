activate :directory_indexes

set :css_dir,    'css'
set :js_dir,     'js'
set :images_dir, 'images'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash

  activate :relative_assets
end

activate :ember
