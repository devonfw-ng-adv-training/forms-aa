import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-market-group-form',
  templateUrl: './market-group-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketGroupFormComponent {
  @Input() public marketGroupForm: FormGroup;
}
