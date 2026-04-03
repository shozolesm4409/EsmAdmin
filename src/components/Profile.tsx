import React, { useState } from 'react';
import { UserCircle, Save, Loader2 } from 'lucide-react';
import { AdminUserRecord } from '../types';

interface ProfileProps {
  admin: AdminUserRecord;
  onUpdateName: (newName: string) => Promise<void>;
}

export function Profile({ admin, onUpdateName }: ProfileProps) {
  const [name, setName] = useState(admin.userName);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) return;
    setIsSaving(true);
    try {
      await onUpdateName(name);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
            <UserCircle size={48} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">User Profile</h2>
            <p className="text-slate-500">Manage your personal information.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">User ID (Email)</label>
            <input
              type="text"
              value={admin.userId}
              disabled
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">User Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Role</label>
            <input
              type="text"
              value={admin.role}
              disabled
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed"
            />
          </div>

          <div className="pt-4">
            <button
              onClick={handleSave}
              disabled={isSaving || name === admin.userName}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSaving ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Save size={20} />
              )}
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
