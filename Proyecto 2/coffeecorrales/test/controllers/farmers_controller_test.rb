require 'test_helper'

class FarmersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @farmer = farmers(:one)
  end

  test "should get index" do
    get farmers_url, as: :json
    assert_response :success
  end

  test "should create farmer" do
    assert_difference('Farmer.count') do
      post farmers_url, params: { farmer: { address: @farmer.address, description: @farmer.description, hectareas: @farmer.hectareas, name: @farmer.name } }, as: :json
    end

    assert_response 201
  end

  test "should show farmer" do
    get farmer_url(@farmer), as: :json
    assert_response :success
  end

  test "should update farmer" do
    patch farmer_url(@farmer), params: { farmer: { address: @farmer.address, description: @farmer.description, hectareas: @farmer.hectareas, name: @farmer.name } }, as: :json
    assert_response 200
  end

  test "should destroy farmer" do
    assert_difference('Farmer.count', -1) do
      delete farmer_url(@farmer), as: :json
    end

    assert_response 204
  end
end
