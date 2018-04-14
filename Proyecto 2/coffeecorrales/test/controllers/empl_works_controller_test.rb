require 'test_helper'

class EmplWorksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @empl_work = empl_works(:one)
  end

  test "should get index" do
    get empl_works_url, as: :json
    assert_response :success
  end

  test "should create empl_work" do
    assert_difference('EmplWork.count') do
      post empl_works_url, params: { empl_work: { end_date: @empl_work.end_date, farmer_id: @empl_work.farmer_id, start_date: @empl_work.start_date, user_id: @empl_work.user_id, work_id: @empl_work.work_id } }, as: :json
    end

    assert_response 201
  end

  test "should show empl_work" do
    get empl_work_url(@empl_work), as: :json
    assert_response :success
  end

  test "should update empl_work" do
    patch empl_work_url(@empl_work), params: { empl_work: { end_date: @empl_work.end_date, farmer_id: @empl_work.farmer_id, start_date: @empl_work.start_date, user_id: @empl_work.user_id, work_id: @empl_work.work_id } }, as: :json
    assert_response 200
  end

  test "should destroy empl_work" do
    assert_difference('EmplWork.count', -1) do
      delete empl_work_url(@empl_work), as: :json
    end

    assert_response 204
  end
end
