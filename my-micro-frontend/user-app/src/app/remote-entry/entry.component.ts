import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { DxDataGridModule } from 'devextreme-angular';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  joinDate: string;
}

interface Role {
  label: string;
  value: string;
}

interface Department {
  label: string;
  value: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    FloatLabelModule,
    FloatLabelModule,
    TableModule,
    DxDataGridModule
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class RemoteEntryComponent implements OnInit {
  users: User[] = [];

  // Form fields
  newUser = {
    name: '',
    email: '',
    role: '',
    department: '',
    status: 'active'
  };

  roles: Role[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'Manager', value: 'manager' },
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'User', value: 'user' }
  ];

  departments: Department[] = [
    { label: 'Engineering', value: 'engineering' },
    { label: 'Design', value: 'design' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
    { label: 'HR', value: 'hr' },
    { label: 'Finance', value: 'finance' }
  ];

  constructor(private translate: TranslateService) {
    // Manually initialize translation for micro-frontend
    this.translate.setDefaultLang('tr');
    this.translate.use('tr');
  }



  ngOnInit() {
    // Sample data
    this.users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@company.com',
        role: 'admin',
        department: 'engineering',
        status: 'active',
        joinDate: '2024-01-15'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@company.com',
        role: 'manager',
        department: 'design',
        status: 'active',
        joinDate: '2024-02-20'
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@company.com',
        role: 'developer',
        department: 'engineering',
        status: 'active',
        joinDate: '2024-03-10'
      },
      {
        id: 4,
        name: 'Sarah Williams',
        email: 'sarah.williams@company.com',
        role: 'designer',
        department: 'design',
        status: 'inactive',
        joinDate: '2023-12-05'
      }
    ];
  }

  addUser() {
    // Validation
    if (!this.newUser.name || !this.newUser.email || !this.newUser.role || !this.newUser.department) {
      console.warn('Lütfen tüm alanları doldurun!');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.newUser.email)) {
      console.error('Geçerli bir email adresi girin!');
      return;
    }

    // Create new user
    const user: User = {
      id: this.users.length + 1,
      name: this.newUser.name,
      email: this.newUser.email,
      role: this.newUser.role,
      department: this.newUser.department,
      status: this.newUser.status,
      joinDate: new Date().toISOString().split('T')[0]
    };

    // Add to table
    this.users = [user, ...this.users];

    console.log('Kullanıcı başarıyla eklendi!');

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.newUser = {
      name: '',
      email: '',
      role: '',
      department: '',
      status: 'active'
    };
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    console.info(`${user.name} kullanıcısı silindi`);
  }

  getRoleLabel(role: string): string {
    const roleObj = this.roles.find(r => r.value === role);
    return roleObj ? roleObj.label : role;
  }

  getDepartmentLabel(department: string): string {
    const deptObj = this.departments.find(d => d.value === department);
    return deptObj ? deptObj.label : department;
  }

  getStatusSeverity(status: string): 'success' | 'danger' {
    return status === 'active' ? 'success' : 'danger';
  }
}