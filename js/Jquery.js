<script type="text/javascript">
    $(document).ready(function(){
      var allPanels = $('.accordion > p').hide();

      $('.accordion > h3 > a').click(function() {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
      });
      $("#1").click(function() {
        $("#photo").attr('src','img/2.jpeg');
        $("#photo").fadeIn(1000);
      });
      $("#2").click(function() {
        $("#photo").attr('src','img/3.jpeg');
      });
      $("#3").click(function() {
        $("#photo").attr('src','img/4.jpeg');
      });
      $("#4").click(function() {
        $("#photo").attr('src','img/5.jpeg');
      });
      $("#5").click(function() {
        $("#photo").attr('src','img/6.jpeg');
      });
    });
</script>
