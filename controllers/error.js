exports.getErrorPage = (req, res, next) => {
    res.render('error/404', {
      title_name: 'Page Not Found'
    });
  };
  