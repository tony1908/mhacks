require 'test_helper'

class LastControllerTest < ActionController::TestCase
  test "should get last" do
    get :last
    assert_response :success
  end

end
