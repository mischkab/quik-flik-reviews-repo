require 'rails_helper'

RSpec.describe "Movies", type: :request do
  before do
    Movie.create(title: 'Finding Nemo', overview: 'A timid clownfish sets out on a journey to bring his son home.', director: 'Andrew Stanton', image: 'http://www.impawards.com/2003/posters/finding_nemo_ver2.jpg')
    Movie.create(title: 'Godzilla vs. Kong', overview: 'The fearsome Godzilla and the mighty Kong--with humanity caught in the balance.', director: 'Adam Wingard', image: 'http://www.impawards.com/2021/posters/godzilla_vs_kong.jpg')
  end

  describe "GET /index" do
    it 'returns an array of all movies' do
      get '/movies'

      expect(response.body).to include_json([
        { id: a_kind_of(Integer), title: 'Finding Nemo', overview: 'A timid clownfish sets out on a journey to bring his son home.', director: 'Andrew Stanton' },
        { id: a_kind_of(Integer), title: 'Godzilla vs. Kong', overview: 'The fearsome Godzilla and the mighty Kong--with humanity caught in the balance.', director: 'Adam Wingard' }
      ])
    end
  end

  describe "GET /movies/:id" do
    it 'returns the first movie' do
      get "/movies/#{Movie.first.id}"

      expect(response.body).to include_json({
        'title':'Finding Nemo',
        'director':'Andrew Stanton'
      })
    end

    it 'returns the second movie' do
      get "/movies/#{Movie.second.id}"

      expect(response.body).to include_json({
        'title':'Godzilla vs. Kong',
        "director":'Adam Wingard'
      })
    end
  end
end
