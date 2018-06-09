public login( email: string, password: string,renew?: boolean):Observable<string> {
  let loginObservable = Observable.create(observer => {
    auth0.login( //autho is the variable for auth0 somewhere else.
      {
        realm: "mydb",// set your db here
        email,  /
        password
      },
      (err) => {
        if (err) {
          observer.next(err);
        }
        observer.complete();
      }
    );
  });
  return loginObservable;
}


// how to subscribe and catch error

this.login(email, password, rememberme).subscribe(err => {
console.log(err);
  //you will get error messages here.
});
