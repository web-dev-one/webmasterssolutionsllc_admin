require "test_helper"

class Api::KennelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_kennels_index_url
    assert_response :success
  end

  test "should get show" do
    get api_kennels_show_url
    assert_response :success
  end

  test "should get create" do
    get api_kennels_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_kennels_delete_url
    assert_response :success
  end
end
