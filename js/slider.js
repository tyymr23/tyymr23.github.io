document.addEventListener("DOMContentLoaded", () => {
  const a = document.querySelectorAll(".toggle");
  a.forEach(e => {
    e.addEventListener("click", function () {
      let slider = this.nextElementSibling;
      if (slider.style.height) {
        slider.style.height = null;
        e.classList.remove("highlight");
      } else {
        document.querySelectorAll(".toggle.highlight").forEach(f => {
          f.classList.remove("highlight");
          f.nextElementSibling.style.height = null;
        });
        e.classList.add("highlight");
        slider.style.height = slider.scrollHeight + "px";
      }
    })
  })
})

/* 
In case anyone wants to understand what's going on here, a quick translation into plain English.

This is JavaScript, and it can perform actions on HTML and CSS. In this case, the JS controls the slidedown action on the buttons.

The numbers below refer to the line numbers in the code. 

1. Wait for the page to load.

2. a = the set of all elements with the class "toggle" (the buttons in the "My Work" section).

3-4. For every 'toggle' item, listen for a click. If an item is clicked...

5. slider = the element directly after the 'toggle' element (in this case, the slidedown). Here's an example:
  <div class="button button-background-color toggle"> <-- toggle
    <i class="fab fa-medium"></i> Blog post
  </div>
  <div class="slidedown"> <-- next element sibling

6-13. If the slider has height (i.e. if the height is > 0), set the slider height to null and remove the 'active' class (the 'active' class changes the button background color). Otherwise, for each element with *both* the 'toggle' and 'active' class, remove the 'active' class and set the slider height to null. This resets every *other* button (besides the one we clicked) that happens to be active and closes that button's slidedown.

14-15. Now that no other 'toggle' elements are active, add the class 'active' to the 'toggle' element we clicked, and set the slider height to the full height of the (no longer hidden) slider. The height change triggers the slidedown transition animation (see the '.slidedown' class in style.css for the transition settings).
*/
