require 'rails_helper'

RSpec.describe User, type: :model do
   it 'has a password field' do
    expect(User.new).to respond_to(:password)
  end

  it 'has a username field' do
    expect(User.new).to respond_to(:username)
  end

  it 'has an email field' do
    expect(User.new).to respond_to(:email)
  end

  describe 'authenticate' do
    it 'returns the user if credentials match' do
      user = User.new
      user.password = 'foo'
      expect(user.authenticate('foo')).to eq(user)
    end

    it "returns false if credentials don't match" do
      user = User.new
      user.password = 'foo'
      expect(user.authenticate('fo0')).to be(false)
    end
  end
end
