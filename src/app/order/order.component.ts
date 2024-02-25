import { ChangeDetectorRef, Component } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  order: any[] = [];

  constructor(private shopService: ShopService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscribeToOrder();
    
  }

  subscribeToOrder(): void {
    this.shopService.getOrder().subscribe((orders: any[]) => {
      this.order = orders;
      this.cdr.detectChanges(); 
    });

  }
  
  
  removeItem(index: number): void {
    const orderId = this.order[index]?.id;
    if (orderId) {
      this.shopService.deleteOrderToDatabase(orderId);
      console.log(orderId);
      this.shopService.getOrder().subscribe((orders: any[]) => {
        this.order = orders;
        this.cdr.detectChanges();
      });
    }
  }
  }
  
  
  
 
