export interface StudentInfo {
  fullName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup?: string;
  nationality: string;
  classAppliedFor: string;
  academicSession: string;
  previousSchoolName?: string;
  previousClass?: string;
}

export interface ParentInfo {
  fatherName: string;
  motherName: string;
  guardianName?: string;
  primaryMobile: string;
  alternateMobile?: string;
  email?: string;
  relationship: string;
  occupation?: string;
}

export interface AddressInfo {
  streetAddress: string;
  cityOrTown: string;
  district: string;
  state: string;
  pincode: string;
}

export interface DocumentsInfo {
  hasPhoto: boolean;
  photoFileName?: string;
  hasBirthCert: boolean;
  birthCertFileName?: string;
  hasTransferCert: boolean;
  transferCertFileName?: string;
  hasMarksheet: boolean;
  marksheetFileName?: string;
  agreementAcknowledged: boolean;
}

export interface AdmissionApplication {
  student: StudentInfo;
  parent: ParentInfo;
  address: AddressInfo;
  documents: DocumentsInfo;
}

export interface AdmissionSubmissionResult {
  success: boolean;
  applicationNumber: string;
  submittedAt: string;
  studentName: string;
  classAppliedFor: string;
  parentContact: string;
  message: string;
}
