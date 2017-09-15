<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
        
<div class="container" style="width:60%">
	<div class="row main">
		<div class="panel-heading">
        	<div class="panel-title text-center">
            <h1 class="title">Update</h1>
            <hr />
        </div>
    </div> 
	<div class="main-login main-center">
    	<form id="update_form" name="update_form" class="form-horizontal">
        	<input id="id" type="hidden" class="form-control" name="id" value="${student.id}" readonly/>
            	<div class="form-group">
	            <label for="name" class="cols-sm-2 control-label">NAME</label>
	                <div class="cols-sm-10">
	                	<div class="input-group">
			                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
			                <input id="name" type="text" class="form-control" name="name" value="${student.name}" readonly/>
	               		</div>
	                </div>
                </div>
			
				<div class="form-group">
				<label for="email" class="cols-sm-2 control-label">Email</label>
					<div class="cols-sm-10">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
							<input id="email" name="email" type="text" class="form-control" placeholder="${student.email}"/>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="phone" class="cols-sm-2 control-label">Phone Number</label>
					<div class="cols-sm-10">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
							<input id="phone" name="phone" type="text" class="form-control"   placeholder="${student.phone}"/>
						</div>
					</div>
				</div>

				<div class="form-group">
					<label for="password" class="cols-sm-2 control-label">Password</label>
					<div class="cols-sm-10">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
							<input name="password" id="password" type="password" class="form-control" data-toggle="popover" value="" placeholder="Enter your Password" />
						</div>
						<span id="result"></span>
					</div>
				</div>
				<div class="form-group">
					<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
					<div class="cols-sm-10">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
							<input id="confirm" name="confirm" type="password" class="form-control" placeholder="Confirm your Password"/>
						</div>
						<span id="confirmPass"></span>
					</div>
				</div>
				<div class="form-group ">
					<input id="confirmBtn" type="submit" class="btn btn-primary btn-lg btn-block login-button" value="UPDATE!">
				</div>
			</form>
		</div>
	</div>
</div>
<script>
app.controller.updateStudent();
</script>
