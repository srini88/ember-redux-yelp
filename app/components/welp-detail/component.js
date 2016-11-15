import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var WelpDetailComponent = Ember.Component.extend({
  layout: hbs`
    {{#each result.reviews as |review|}}
      <div class="detail-rating">{{review.comment}} {{review.rating}} ★ review</div>
    {{/each}}

    {{welp-rating result=result rate=rate}}

    <div class="detail-name">{{result.name}}</div>

    {{#each result.reviews as |review|}}
      {{#if review.reviewed}}
        <p class="detail-comment">
          <textarea rows="4" cols="70" oninput={{action (mut buffer) value="target.value"}}></textarea>
          <button class="btn-success" onclick={{action comment result.id buffer}}>Post Review</button>
        </p>
      {{/if}}
    {{/each}}
  `
});

export default WelpDetailComponent;
