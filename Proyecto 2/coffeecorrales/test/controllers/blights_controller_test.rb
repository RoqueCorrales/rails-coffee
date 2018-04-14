require 'test_helper'

class BlightsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blight = blights(:one)
  end

  test "should get index" do
    get blights_url, as: :json
    assert_response :success
  end

  test "should create blight" do
    assert_difference('Blight.count') do
      post blights_url, params: { blight: { date: @blight.date, description: @blight.description, farmer_id: @blight.farmer_id, treatment: @blight.treatment } }, as: :json
    end

    assert_response 201
  end

  test "should show blight" do
    get blight_url(@blight), as: :json
    assert_response :success
  end

  test "should update blight" do
    patch blight_url(@blight), params: { blight: { date: @blight.date, description: @blight.description, farmer_id: @blight.farmer_id, treatment: @blight.treatment } }, as: :json
    assert_response 200
  end

  test "should destroy blight" do
    assert_difference('Blight.count', -1) do
      delete blight_url(@blight), as: :json
    end

    assert_response 204
  end
end
