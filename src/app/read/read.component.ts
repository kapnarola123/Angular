import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
 
@Component({
    selector: 'app-read-products',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.css'],
    providers: [ProductService]
})
 
export class ReadComponent implements OnInit {
 
    // store list of products
    products: Product[];
 
    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private productService: ProductService){}
 
    // methods that we will use later
    createProduct(){}
    readOneProduct(id){}
    updateProduct(id){}
    deleteProduct(id){}
 
    // Read products from API.
    ngOnInit(){
        this.productService.readProducts()
            .subscribe(products =>
                this.products = products['records']
			);
			
		console.log(this.products);
		
    }
}