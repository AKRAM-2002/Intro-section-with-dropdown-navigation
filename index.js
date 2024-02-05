
document.getElementById('features').addEventListener('mouseover', function() {
    console.log('mouseover')
    document.querySelector(' .sub-list').style.display = 'block';
  });

  document.getElementById('features').addEventListener('mouseout', function() {
    document.querySelector('#features .sub-list').style.display = 'none';
  });

  document.getElementById('company').addEventListener('mouseover', function() {
    document.querySelector('#company .sub-list').style.display = 'block';
  });

  document.getElementById('company').addEventListener('mouseout', function() {
    document.querySelector('#company .sub-list').style.display = 'none';
  });