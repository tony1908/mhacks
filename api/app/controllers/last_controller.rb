class LastController < ApplicationController
  def last
  	@status = Status.last
  	respond_with @status
  end
end
