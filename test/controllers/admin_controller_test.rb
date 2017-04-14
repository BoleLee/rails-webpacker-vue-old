require 'test_helper'

class AdminControllerTest < ActionDispatch::IntegrationTest
  test "should get home/index" do
    get admin_home/index_url
    assert_response :success
  end

end
