class StatusController < ApplicationController
		def index
		@status = Status.all.order(:id)
		respond_with @status
	end
	def show
		@status = Status.find params[:id]
		respond_with @status
	end
	def create
		@status = Status.new status_params
		if @status.save!
			respond_with @status, status: :created, location: @status
		else
			respond_with @status, status: :unprocessable_entity
		end
	end
	def update
		@status = Status.find params[:id]
		if status.update_attributes!(status_params)
			respond_with @status, status: :ok, location: @status
		else
			respond_with @status, status: :unprocessable_entity
		end
	end
	def destroy
		@status = Status.find params[:id]
		if status.destroy
			render json: {status: :ok}
		else
			respond_with @status, status: :unprocessable_entity
		end
	end
	protected
	def status_params
		params.require(:status).permit(:status, :longitude, :latitude)
	end
end
