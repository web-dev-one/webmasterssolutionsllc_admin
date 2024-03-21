require "test_helper"

class Api::ShadesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_shades_index_url
    assert_response :success
  end

  test "should get show" do
    get api_shades_show_url
    assert_response :success
  end

  test "should get create" do
    get api_shades_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_shades_delete_url
    assert_response :success
  end
end
