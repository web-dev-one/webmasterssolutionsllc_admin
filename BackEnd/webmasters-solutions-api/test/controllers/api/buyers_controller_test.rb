require "test_helper"

class Api::BuyersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_buyers_index_url
    assert_response :success
  end

  test "should get show" do
    get api_buyers_show_url
    assert_response :success
  end

  test "should get create" do
    get api_buyers_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_buyers_delete_url
    assert_response :success
  end
end
