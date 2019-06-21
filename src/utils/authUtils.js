import jwtDecode from 'jwt-decode'

export function requireAuth(nextState, replace) {
  console.log('in require auth');
  const token = localStorage.getItem('userToken')
  console.log(token);
  if (!checkWebToken(token)) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    return false;
  } else {
    return true
  }
}

export function checkWebToken(token) {
  console.log('in the checkWebToken');
  console.log(token);
  if(!token) {
    return false
  }

  try {
    const decoded = jwtDecode(token)._doc
    if(decoded.username && decoded.firstName && decoded.lastName && decoded.email) {
      return true
    }
  } catch (err) {
    return false
  }
}
