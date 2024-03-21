require "test_helper"

class Api::InstallsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_installs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_installs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_installs_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_installs_delete_url
    assert_response :success
  end
end
