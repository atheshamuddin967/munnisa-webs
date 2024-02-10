function ChangePassword() {
  return (
    <div className="forgetLayout">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="forget-view">
              <div className="forgetfields">
                <h6>Set your new password</h6>
                <input type="text" placeholder="New password" />
                <input type="text" placeholder="Confrim password" />
                <button>Set password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
